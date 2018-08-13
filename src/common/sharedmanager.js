export default class SharedManager {
    
        static myInstance = null;
    
         deviceId = 0
    
    
        /**
         * @returns {SharedManager}
         */
        static getInstance() {
            if (this.myInstance == null) {
                this.myInstance = new SharedManager();
            }
    
            return this.myInstance;
        }
    
        getDeviceID() {
            return this.deviceId;
        }
    
        setDeviceID(id) {
            this.deviceId = id;
        }
    }