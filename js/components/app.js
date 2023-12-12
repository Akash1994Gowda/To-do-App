import Assignments from "./Assignments.js";
import TheHeader from "./TheHeader.js";
import TheLoader from "./TheLoader.js";
export default {
  components: { Assignments, TheHeader, TheLoader },
  template: `
  <div v-if="assignment" class="app">
  <TheHeader/>
  <Assignments/> 
  </div>
  <TheLoader v-if="loader"/>
  `,
  data() {
    return {
      loader: true,
      assignment: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
      this.assignment = true;
    }, 500);
  },
};
