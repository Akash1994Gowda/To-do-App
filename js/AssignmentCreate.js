export default {
  template: `
    <hr>
    <form @submit.prevent="addData">
    <div>
    <input v-model="inputData" type="text"/>
    <button class="submit" type="submit">Add New List</button>
    </div>
    </form>
    `,

  data() {
    return {
      inputData: "",
    };
  },
  props: ["lengthVal"],
  emits: ["addData"],
  methods: {
    addData() {
      if (this.inputData === "") return;
      this.$emit("addData", this.inputData);
      this.inputData = "";
    },
  },
};
