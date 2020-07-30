import { Options, Vue } from 'vue-class-component';

interface DropdownItem {
  id: number;
  text: string;
}

@Options({
  props: ['items'],
})
export default class Dropdown extends Vue {
  public showDropdownPanel = false;
  public selectedItems: Array<DropdownItem> = [];
  public panelItems: Array<DropdownItem> = [...(this.$props as any).items];

  public toggleDropdown(event: any): void {
    const unselectItemIndex = event.target.dataset.unselectItemId;

    if (unselectItemIndex) {
      this.panelItems = [...this.panelItems, ...this.selectedItems.splice(Number(unselectItemIndex), 1)].sort();
    } else {
      this.showDropdownPanel = !this.showDropdownPanel;
    }
  }

  public selectItem(itemIndex: number) {
    this.selectedItems = [...this.selectedItems, ...this.panelItems.splice(itemIndex, 1)];
  }
}
