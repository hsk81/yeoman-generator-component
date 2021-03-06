<%_ name_prefix = name[0] === '@' ? name.slice(1).split('/')[0] : name.split('/')[0] _%>
<%_ name_suffix = name[0] === '@' ? name.slice(1).split('/').pop() : name.split('/').pop() _%>
<%_ name_ucamel = _.upperFirst(_.camelCase(name_suffix)) _%>
/* eslint-env browser, node */
import './styles/styles.scss';
/**
 * @see: https://developer.mozilla.org/en-US/docs/Web/Web_Components
 */
export class <%= name_ucamel %> extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.setupEvents();
        this.setupStyle();
    }
    setupEvents() {
        this.addEventListener('show', this.onShow.bind(this));
        this.addEventListener('hide', this.onHide.bind(this));
    }
    setupStyle() {
        this.classList.add('<%= name_suffix %>', '<%= name_suffix %>-hidden');
    }
    show() {
        this.classList.remove('<%= name_suffix %>-hidden');
    }
    hide() {
        this.classList.add('<%= name_suffix %>-hidden');
    }
    onShow() {
        this.show();
    }
    onHide() {
        this.hide();
    }
}
if (typeof window.customElements !== 'undefined') {
    window.customElements.define('<%= name_suffix %>', <%= name_ucamel %>);
}
export default <%= name_ucamel %>;
