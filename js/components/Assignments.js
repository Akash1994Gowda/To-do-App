import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "../AssignmentCreate.js";
export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
   <main>
   <div class="assign-flex">
   <AssignmentList :assignments="filter.incomplete" title="In Progress"/>
   <AssignmentList :assignments="filter.complete" title="Completed"/>
   </div>
   <AssignmentCreate @addData="addData"/>
  
   </main>
    `,
  data() {
    return {
      dataList: [],
    };
  },
  created() {
    try {
      fetch("http://localhost:3001/assignments")
        .then((data) => data.json())
        .then((assignment) => {
          this.dataList = assignment;
        });
    } catch (error) {
      console.log(error);
    }
  },

  computed: {
    filter() {
      return {
        incomplete: this.dataList.filter((item) => !item.complete),
        complete: this.dataList.filter((item) => item.complete),
      };
    },
  },
  methods: {
    addData(val) {
      this.dataList = [
        ...this.dataList,
        {
          name: val,
          complete: false,
          id: this.dataList.length + 1,
        },
      ];
    },
  },
};
