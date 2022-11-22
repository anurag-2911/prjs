function Start(){
// alert('hello');
      const util = require("util");
      const exec = util.promisify(require("child_process").exec);

      const testOpenEvent = async () => {
        let eventFired = false;
        const appOpen = (params) =>{
          console.log("params", params);
          console.log('appOpen event');
          eventFired = true;
        };

        nw.App.onOpen.addListener(appOpen);
       

        const result = await exec(
          `${process.argv} ${nw.App.startPath} --testing`
        );
        if (!eventFired) return false;
        return true;
      };
      
      (async () => {
        for (let i = 0; i <= 5; i++) {
          console.log(`Test count: ${i}`);

          if (!(await testOpenEvent())) {
            console.log("The open event did not fire!");
          }
        }
      })();
}
