import easypost

class Shipping:

    def __init__(self,config):

        MODE = config.configMode()

        if MODE == 'test':
            easypost.api_key = 'UkcBy5FU81KSXBEHqAicwA'
        if MODE == 'live':
            easypost.api_key = 'rqNWHlFPA9OAjCBkUMnexg'

        self.from_address = easypost.Address.create(
          verify=["delivery"],
          name = "Fandemic",
          street1 = "11823 Maren Ct.",
          street2 = "",
          city = "Baltimore",
          state = "MD",
          zip = "21136",
          country = "US",
          phone = "443-536-4110"
        )

        # create parcel
        try:
          self.parcel = easypost.Parcel.create(
            length = 6,
            width = 6,
            height = 6,
            weight = 15
          )
        except easypost.Error as e:
          raise e

    #get the shipping rate based on address
    def get_rates(self,customer):
        # create and verify addresses
        to_address = easypost.Address.create(
          verify=["delivery"],
          name = customer['name'],
          street1 = customer['street'],
          street2 = "",
          city = customer['city'],
          state = customer['state'],
          zip = customer['zip'],
          country =customer['country']
        )

        # create shipment
        shipment = easypost.Shipment.create(
          to_address = to_address,
          from_address = self.from_address,
          parcel = self.parcel
        )

        rates = []
        for s in shipment.rates:
            rate = {}
            rate['rate'] = s['rate']
            rate['delivery_days'] = s['est_delivery_days']
            rate['service'] = s['service']
            rates.append(rate)

        return rates




    #Purchase a sample label and return the label URL
    #returns a dictionary with the label_url and shipment ID
    def purchase_shipping_label(self,company,customer):

        #address of the company
        from_address = easypost.Address.create(
          verify=["delivery"],
          name = company['name'],
          street1 = company['street'],
          street2 = "",
          city = company['city'],
          state = company['state'],
          zip = company['zip'],
          country = company['country']
        )

        #address of the client
        to_address = easypost.Address.create(
          verify=["delivery"],
          name = customer['name'],
          street1 = customer['street'],
          street2 = "",
          city = customer['city'],
          state = customer['state'],
          zip = customer['zip'],
          country = customer['country']
        )

        #return address
        return_address = easypost.Address.create(
          verify=["delivery"],
          name = 'Fandemic Inc.',
          street1 = '10420 McKinley Dr',
          street2 = "",
          city = 'Tampa',
          state = 'FL',
          zip = '33612',
          country = 'US',
          phone = "443-536-4110"
        )


        # create shipment
        shipment = easypost.Shipment.create(
          to_address = to_address,
          from_address = from_address,
          return_address = return_address,
          parcel = self.parcel
        )

        # alternatively:
        shipment.buy(rate = shipment.lowest_rate())

        # Insure the shipment for the value
        shipment.insure(amount=50)

        print shipment.tracking_code
        print shipment.postage_label.label_url
        print shipment.tracker.id

        info = {}
        info['tracking_code'] = shipment.tracking_code
        info['label_url'] = shipment.postage_label.label_url
        info['tracker_url'] = shipment.tracker.public_url
        info['tracker_id'] = shipment.tracker.id

        return info
