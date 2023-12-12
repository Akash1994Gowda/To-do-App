export default {
  template: `
    <li>{{item.name}}  <input v-model="item.complete" type="checkbox"/> <button class="close">❌</button> </li>
    `,
  props: ["item"],
};
