import easypost

class Shipping:

    def __init__(self):

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

    #get the shipping rate based on address
    def get_rates(self,customer):
        # create and verify addresses
        to_address = easypost.Address.create(
          verify=["delivery"],
          name = customer['name'],
          street1 = customer['addr'],
          street2 = "",
          city = customer['city'],
          state = customer['state'],
          zip = customer['zip'],
          country = customer['country'],
          phone = "555-555-5555"
        )


        # create parcel
        try:
          parcel = easypost.Parcel.create(
            predefined_package = "Parcel",
            weight = 24
          )
        except easypost.Error as e:
          print e.message
          if e.param != None:
            print 'Specifically an invalid param: ' + e.param

        try:
          parcel = easypost.Parcel.create(
            length = 8,
            width = 6,
            height = 2,
            weight = 24
          )
        except easypost.Error as e:
          raise e

        # create customs_info form for intl shipping
        customs_item = easypost.CustomsItem.create(
          description = "EasyPost t-shirts",
          hs_tariff_number = 123456,
          origin_country = "US",
          quantity = 2,
          value = 96.27,
          weight = 24
        )
        customs_info = easypost.CustomsInfo.create(
          customs_certify = 1,
          customs_signer = "Hector Hammerfall",
          contents_type = "gift",
          contents_explanation = "a box with beauty products",
          eel_pfc = "NOEEI 30.37(a)",
          non_delivery_option = "return",
          restriction_type = "none",
          restriction_comments = "",
          customs_items = [customs_item]
        )

        # create shipment
        shipment = easypost.Shipment.create(
          to_address = to_address,
          from_address = self.from_address,
          parcel = parcel,
          customs_info = customs_info
        )

        rates = []
        for s in shipment.rates:
            rate = {}
            rate['rate'] = s['rate']
            rate['delivery_days'] = s['est_delivery_days']
            rate['service'] = s['service']
            rates.append(rate)

        return rates

        # buy postage label with one of the rate objects
        #shipment.buy(rate = shipment.rates[0])
        # alternatively: shipment.buy(rate = shipment.lowest_rate())

        #print shipment.tracking_code
        #print shipment.postage_label.label_url

        # Insure the shipment for the value
        #shipment.insure(amount=100)

        #print shipment.insurance
