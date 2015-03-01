//CREATE THE CORE OBJECT
var Core = {}; 

//EVENT LISTENERS FUNCTIONS FOR DOM 2
if(document.addEventListener) {
	
	//ADD EVENT LISTENER METHOD
	Core.addEventListener = function(target, type, listener) {
		target.addEventListener(type, listener, false);
	};
	
	//REMOVE EVENT LISTENER METHOD
	Core.removeEventListener = function(target, type, listener) {
		target.removeEventListener(type, listener, false); 
	};
	
	//PREVENT DEFAULT METHOD
	Core.preventDefault = function(event) {
		event.preventDefault();
	};
	
	//STOP EVENT PROPAGATION
	Core.stopPropagation = function(event) {
		event.stopPropagation();
	};
}	else 
//EVENT LISTENERS FOR INTERNET EXPLORER 
if(document.attachEvent) {
	
	//ADD EVENT LISTENER METHOD FOR IE 
	Core.addEventListener = function(target, type, listener) {
	
		//prevent duplicating listeners 
		if(Core._findListener(target, type, listener) != -1) return;
		
		//create a function wrapper to call listener as a method of target
		var listener2 = function() {
			var event = window.event;
			//if IE5 +
			if(Function.prototype.call) listener.call(target, event);
			else {
					target._currentListener = listener; 
					target._currentListener(event); 
					target._currentListener = null;
			}
		} //listener 2 ends
		
		//add listener 2 to target
		//listener 2 makes listener a method of target- 
		//that allows us to use THIS inside the listener function
		//to refer target
		target.attachEvent("on"+type, listener2);
		
		//create a record object
		var listenerRecord = {
			target: target, 
			type: type, 
			listener: listener, 
			listener2: listener2 
		}
		
		//now get a reference to the window containing the page
		var targetObject = target.document || document; 
		var targetWindow = targetObject.parentWindow;
		//set a unique ID for this listener
		var listenerId = "l" + Core._listenerCounter++;
		//store the record of this listener as a property of targetWindow
		if(!targetWindow._allListeners)
			targetWindow._allListeners = {};
		targetWindow._allListeners[listenerId] = listenerRecord;
		
		//store the listener id in target
		if(!target._listeners) target._listeners = [];
		target._listeners[target._listeners.length] = listenerId;
		
		if(!target._unloadListenerAdded) {
			//we added a new listener so the onunload event becomes available!
			target._unloadListenerAdded = true; 
			targetWindow.attachEvent("onunload",Core._removeAllListeners);
		}
	} //add new event listener ends
	
	
	Core.removeEventListener = function(target, type, listener) {

		//find if event added
		var listenerIndex = Core._findListener(target, type, listener);
		if(listenerIndex == -1) return;
		
		//get the window object
		var targetDocument = target.document || document;
		var targetWindow = targetDocument.parentWindow;
		
		//obtain listener Id from target 
		var listenerId = target._listeners[listenerIndex];
		//get listener record 
		var listenerRecord = targetWindow._allListeners[listenerId];
		
		//Remove event
		target.detachEvent("on"+type, listenerRecord.listener2);
		
		//Splice listener id from target._listeners array
		target._listeners.splice(listenerIndex, 1);
		
		//Remove the record now - we use delete to remove an object
		delete targetWindow._allListeners[listenerId];
	}
	
	//prevent Default for IE 
	Core.preventDefault = function(event) {
		event.returnValue = false;
	}
	
	//stop propagation for IE
	Core.stopPropagation = function(event) {
		event.cancelBubble = true;
	}	
	
	//find listeners method
	Core._findListener = function(target, type, listener) {
		//get listeners array
		var listeners = target._listeners;
		if(!listeners) 
			//no listeners added to target 
			return -1;

		//get target's window
		var targetDocument = target.document || document;
		var targetWindow = targetDocument.parentWindow; 
		
		//search each listener backward 
		for(var i = listeners.length - 1; i>=0; i--) {
			
			//get listener id
			var listenerId = listeners[i];
			//get listener record from window
			var listenerRecord = targetWindow._allListeners[listenerId];
		
			//compare method attributes with each listenerRecord
			if(listenerRecord.type==type&&listenerRecord.listener==listener) 
			//return the index
			return i;
		}
		//no matches
		return -1;
	
	}
	
	//remove all listeners method 
	Core._removeAllListeners = function() {
		
		//get window object
		var targetWindow = this;
		for(id in targetWindow._allListeners) {
			var listenerRecord = targetWindow._allListeners[id];
			listenerRecord.target.detachEvent("on"+listenerRecord.type, listenerRecord.listener2);
			delete targetWindow._allListeners[id];
		
		}
	}
	
	//A counter to generate a unique ID for each listener in the WINDOW object
	Core._listenerCounter = 0;
	
	
	
} //INTERNET EXPLORER METHODS ENDS 



//START METHOD
Core.start = function(runnable) {
	Core.addEventListener(window, "load", runnable.init);
}


