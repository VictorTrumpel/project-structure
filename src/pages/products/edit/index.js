import { productFormEditState } from "../../../state/ProductFormEditState";

import BaseComponent from "../../../components/BaseComponent";
import ProductFormEdit from "../../../components/product-form/ProductFormEdit";

const productForm = new ProductFormEdit(productFormEditState)

export default class extends BaseComponent {
  #elementDOM = null

  constructor() {
    super()

    this.addChildrenComponent('productForm', productForm)
  }

  get element() {
    return this.#elementDOM
  }

  render() {
    const paths = window.location.pathname.split('/')
    const id = paths[paths.length - 1]

    productFormEditState.productId = id

    this.#elementDOM = this.createDOMElement(this.template())

    this.renderDOMChildren(this.#elementDOM)
  }

  template() {
    return /*html*/`
      <div>
        <span data-mount="productForm"></span>
      </div>
    `
  }
}