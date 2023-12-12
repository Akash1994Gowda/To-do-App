import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
  components: { Assignment, AssignmentTags },
  template: `
    <section v-show="assignments.length">
    <h2>{{title}} - <span>{{assignments.length}}</span></h2>
    <AssignmentTags :assignments="assignments" @currentTagAdd="currentTagAdd"/>
    <ul>
    <Assignment v-for="item in filteredAssesments" :key="item.id" :item="item"></Assignment>
    </ul>
    </section>
    `,
  data() {
    return {
      currentTag: "All",
    };
  },
  props: {
    assignments: {
      type: Array,
    },
    title: {
      type: String,
    },
  },

  computed: {
    filteredAssesments() {
      return this.currentTag !== "All"
        ? this.assignments.filter((item) => item.tag === this.currentTag)
        : this.assignments;
    },
  },
  methods: {
    currentTagAdd(val) {
      this.currentTag = val;
    },
  },
};
