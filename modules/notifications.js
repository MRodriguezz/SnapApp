//Type your code here

// Function to register the device/app/user with push notification service provider (GCM)
function registerPush() {
  kony.print("inside registerPush()");
  //var email = frmPush.tbxEmail.text;
  var email = "snap@jfs.ohio.gov";
  var configInfo = {};
  //#ifdef android
  configInfo = {
    senderid: "132314651633"
  };
  //#endif       

  //#ifdef iphone
  configInfo = [0, 1, 2];//config = [0, 1, 2]; or [] for silent
  //#endif
  // Create local configInfo object where we pass the senderid
  //var configInfo = {senderid:senderID};//[0, 1, 2];//{senderid:senderID};
  // Call the push API to register the device with GCM
  kony.print("inside Config Info: "+JSON.stringify(configInfo));
  kony.push.register(configInfo);
}

// Function to deregister the device/app/user with push notification service provider (GCM)
function deregisterPush() {
	var configInfo = {};
	kony.push.deRegister(configInfo);
}

// Function to setup all the callbacks for all push events
// This function is called on the preshow of the form
function setupPushCallbacks() {
	kony.print("inside setupPushCallbacks");
	// Create local object 'callbacks'
	var callbacks = {onsuccessfulregistration:registrationSuccess, 
		             onfailureregistration:registrationFail,
		             onlinenotification:onlinePushMessage,
		             offlinenotification:offlinePushMessage,
		             onsuccessfulderegistration:deregistrationSuccess,
		             onfailurederegistration:deregistrationFail};

	// Call the push API to register callbacks
	kony.push.setCallbacks(callbacks);
}

function registrationSuccess(regId) {
  kony.print("inside registrationSuccess() and Registration Successful : "+JSON.stringify(regId));	
  if(kony.os.deviceInfo().name == "iPhone") {
	subscribeMFMessaging(regId,"iphone");    
  } else {
    subscribeMFMessaging(regId,"android");
  }
}

function registrationFail(error) {
	kony.print("Inside registrationFail() & Error  --------->"+JSON.stringify(error));
}


// Function to be invoked when the deregistration is successful. Once the deregistration is sucessful,
// we need to unsubscribe to KMS.
// So this function contains the code to invoke service 'unregisterSubscriberPush'
function deregistrationSuccess() {
	kony.print("Inside deregistrationSuccess");
	// Displaying the log on the screen along with previous log
	unsubscribeMFMessaging();
}

// Function to be invoked when the deregistration is unsuccessful
function deregistrationFail(error) {
	kony.print("Inside deregistrationFail()");
}


// Function to be invoked when the device receives push notification message when the application is running
function onlinePushMessage(pushMsg) {
  kony.print("Received online push message: "+JSON.stringify(pushMsg));
  var basicConfig = {message: pushMsg.content , alertType:constants.ALERT_TYPE_INFO, alertTitle: pushMsg.title , yesLabel:"OK", alertHandler: null};
  var platformSpecificProperties = {};
  kony.ui.Alert(basicConfig, platformSpecificProperties);
}

// Function to be invoked when the device receives push notification message when the application is not running
function offlinePushMessage(pushMsg) {
  kony.print("Received offline push message: "+JSON.stringify(pushMsg));	
}

function subscribeMFMessaging(regId,ostype) {
  kony.print("inside subscribeMFMessaging()");
  messagingClient = "";
  var deviceID = kony.os.deviceInfo().deviceid;
  var ufID = "snap@jfs.ohio.gov";
  try {
    messagingClient = client.getMessagingService();
  } catch(exception) {
    kony.print("Exception in initializing messagingClient: " + exception.message);
  }
  kony.print("messagingClient: " + JSON.stringify(messagingClient));
  messagingClient.register(ostype,deviceID, regId, ufID,
    function(response) {
      // Displaying the service call status on the screen along with previous log 
      kony.print("Subscription is successful & KSID: "+response.id);
      kony.store.setItem("ksid", response.id);
      kony.store.setItem("PushNotifications", "ON");
      kony.print("Response from subscription service: " + JSON.stringify(response));
    },
    function(error) {
      kony.print("Subscription Failed: " + JSON.stringify(error));
  	}
  );
}
function unsubscribeMFMessaging() {
  kony.print("inside unsubscribeMFMessaging");
  try {
    messagingClient = client.getMessagingService();
  } catch(exception) {
    kony.print("Exception in initializing messagingClient (unsubscribeMFMessaging()): " + exception.message);
  }
  //kony.print("messagingClient: " + JSON.stringify(messagingClient));
  messagingClient.unregister(
    function(response){
      kony.print("Unsubscription Success for KSID: " + response.id);
      kony.print("Response from unsubscribe service " +JSON.stringify(response));
      kony.store.setItem("ksid", "");
      kony.store.setItem("PushNotifications", "OFF");
    },
    function(error) {
      kony.print("Unsubscribe Failed: " +JSON.stringify(error)); 
    }
  );
}