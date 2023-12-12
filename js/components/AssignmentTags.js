export default {
  template: `
    <div class="tag-btn">
    <button :class="{'bg-class':currentTag===tag}" @click="currentTagSet(tag)" v-for="tag in tags" :key="tag">{{tag}}</button>
    </div>
    `,
  props: {
    assignments: {
      type: Array,
    },
  },
  data() {
    return {
      currentTag: "All",
    };
  },
  methods: {
    currentTagSet(tag) {
      this.currentTag = tag;
      this.$emit("currentTagAdd", this.currentTag);
    },
  },
  computed: {
    tags() {
      return ["All", ...this.assignments.map((a) => a.tag)];
    },
  },
};
