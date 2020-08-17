// The URL where the Point of Sale app will send the transaction results.
var callbackUrl = "callback.html";

// Your application ID
var applicationId = "sq0idp-4CVw5fpKwLHOxXyqa1LoZQ";

// The total and currency code should come from your transaction flow.
// For now, we are hardcoding them.
var transactionTotal = "1";
var currencyCode = "USD";

// The version of the Point of Sale SDK that you are using.
var sdkVersion = "v2.0";

const openURL = () => {
    // Configure the allowable tender types
    var tenderTypes =
     `com.squareup.pos.TENDER_CARD, \
      com.squareup.pos.TENDER_CARD_ON_FILE, \
      com.squareup.pos.TENDER_CASH, \  
      com.squareup.pos.TENDER_OTHER`;
  
    var posUrl =
      "intent:#Intent;" +
      "action=com.squareup.pos.action.CHARGE;" +
      "package=com.squareup;" +
      "S.com.squareup.pos.WEB_CALLBACK_URI=" + callbackUrl + ";" +
      "S.com.squareup.pos.CLIENT_ID=" + applicationId + ";" +
      "S.com.squareup.pos.API_VERSION=" + sdkVersion + ";" +
      "i.com.squareup.pos.TOTAL_AMOUNT=" + transactionTotal + ";" +
      "S.com.squareup.pos.CURRENCY_CODE=" + currencyCode + ";" +
      "S.com.squareup.pos.TENDER_TYPES=" + tenderTypes + ";" +
      "end";
  
    window.open(posUrl);
}
