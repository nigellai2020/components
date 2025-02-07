import { Styles, Module, ControlElement, customElements, observable } from "@ijstech/components";
import { DataModel } from "./model";
const Theme = Styles.Theme.ThemeVars;


interface PaymentMainElement extends ControlElement {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'i-payment': PaymentMainElement;
    }
  }
}

@customElements('i-payment')
export default class PaymentMain extends Module {
  @observable()
  private model: DataModel = new DataModel();

  init() {
    super.init();
  }

  render() {
    return <i-panel
      width='100%'
      minHeight='100%'
    >
      <i-hstack
        width='100%'
        padding={{ "top": "8px", "right": "16px", "bottom": "8px", "left": "16px" }}
      >
        <i-icon
          name='times'
          width={16}
          height={16}
          display='inline-flex'
          stack={{ "shrink": "0" }}
        >
        </i-icon>
        <i-hstack
          width='100%'
          stack={{ "basis": "0%", "shrink": "1", "grow": "1" }}
          justifyContent='center'
        >
          <i-label
            caption='Checkout'
          >
          </i-label>
        </i-hstack>
      </i-hstack>
      <i-hstack
        gap={8}
        width='100%'
        background={{ "color": "var(--background-default)" }}
        padding={{ "top": 8, "right": 8, "bottom": 8, "left": 8 }}
      >
        <i-panel
          stack={{ "shrink": "0" }}
        >
          <i-image
            width='100px'
            display='inline-block'
            url={this.model.data?.image}
          >
          </i-image>
        </i-panel>
        <i-vstack
          gap='6px'
          width='100%'
        >
          <i-label
            caption={this.model.data?.name}
            font={{ "size": "16px", "weight": "600" }}
          >
          </i-label>
          <i-label
            caption={this.model.data?.publishedAt}
            font={{ "size": "12px" }}
          >
          </i-label>
          <i-panel display="inline">
            <i-label
              caption={this.model.data?.quantity}
              font={{ "size": "14px" }}
              display="inline"
            >
            </i-label>
            <i-label
              caption='ticket. Contribute what you can'
              font={{ "size": "14px" }}
              padding={{ "left": 4 }}
              display="inline"
            >
            </i-label>
          </i-panel>
        </i-vstack>
      </i-hstack>
      <i-vstack
        width='100%'
        gap='16px'
        padding={{ "left": 16, "right": 16, "top": 16 }}
      >
        <i-label
          caption='Payment Information'
          font={{ "size": "16px", "weight": "600", "transform": "uppercase" }}
        >
        </i-label>
        <i-vstack
          width='100%'
          background={{ "color": "var(--input-background)" }}
          border={{ "width": "1px", "radius": "4px", "color": "var(--divider)" }}
        >
          <i-hstack
            gap='8px'
            width='100%'
            height={32}
            border={{ "radius": "4px 4px 0 0" }}
            alignItems='center'
            padding={{ "right": "8px", "left": "8px" }}
          >
            <i-hstack
              position='relative'
              width='100%'
              gap='4px'
              verticalAlignment='center'
              height='100%'
              alignItems='center'
            >
              <i-icon
                position='relative'
                width='20px'
                height='20px'
                name='credit-card'
                fill={Theme.input.fontColor}
              >
              </i-icon>
              <i-input
                position='relative'
                width='100%'
                height='100%'
                background={{ "color": "transparent" }}
                border={{ "width": "0px" }}
                padding={{ "top": "5px", "right": "5px", "bottom": "5px", "left": "5px" }}
                placeholder='Add a credit card'
              >
              </i-input>
            </i-hstack>
            <i-label
              visible={false}
              font={{ "color": "var(--colors-error-main)" }}
              position='relative'
              maxWidth='30%'
              overflowWrap='break-word'
            >
            </i-label>
          </i-hstack>
          <i-hstack
            gap='8px'
            width='100%'
            border={{ "top": { "width": "1px", "style": "solid", "color": "var(--divider)" }, "radius": "0 0 4px 4px" }}
            alignItems='center'
          >
            <i-hstack
              position='relative'
              width='100%'
            >
              <i-input
                position='relative'
                width='100%'
                height='32px'
                background={{ "color": "transparent" }}
                border={{ "width": "0px" }}
                padding={{ "top": "5px", "right": "8px", "bottom": "5px", "left": "8px" }}
                placeholder='Add a voucher'
              >
              </i-input>
            </i-hstack>
          </i-hstack>
        </i-vstack>
      </i-vstack>
      <i-vstack
        width='100%'
        gap='16px'
        padding={{ "left": 16, "right": 16, "top": 16 }}
      >
        <i-label
          caption='Contact information'
          font={{ "size": "16px", "weight": "600", "transform": "uppercase" }}
        >
        </i-label>
        <i-vstack
          width='100%'
          background={{ "color": "var(--input-background)" }}
          border={{ "width": "1px", "radius": "4px", "color": "var(--divider)" }}
        >
          <i-hstack
            gap='8px'
            width='100%'
            height={32}
            border={{ "radius": "4px 4px 0 0" }}
            alignItems='center'
            padding={{ "right": "8px", "left": "8px" }}
          >
            <i-hstack
              width='100%'
              gap='4px'
              verticalAlignment='center'
              height='100%'
              alignItems='center'
            >
              <i-icon
                width='20px'
                height='20px'
                name='user'
                fill={Theme.input.fontColor}
              >
              </i-icon>
              <i-input
                width='100%'
                height='100%'
                background={{ "color": "transparent" }}
                border={{ "width": "0px" }}
                padding={{ "top": "5px", "right": "5px", "bottom": "5px", "left": "5px" }}
                placeholder='Jane Doe'
              >
              </i-input>
            </i-hstack>
            <i-label
              visible={false}
              font={{ "color": "var(--colors-error-main)" }}
              maxWidth='30%'
              overflowWrap='break-word'
            >
            </i-label>
          </i-hstack>
          <i-hstack
            gap='8px'
            width='100%'
            height={32}
            border={{ "width": "0px", "top": { "width": "1px", style: 'solid', color: Theme.divider } }}
            alignItems='center'
            padding={{ "right": "8px", "left": "8px" }}
          >
            <i-hstack
              width='100%'
              gap='4px'
              verticalAlignment='center'
              height='100%'
              alignItems='center'
            >
              <i-icon
                width='20px'
                height='20px'
                name='phone'
                fill={Theme.input.fontColor}
              >
              </i-icon>
              <i-input
                width='100%'
                height='100%'
                background={{ "color": "transparent" }}
                border={{ "width": "0px" }}
                padding={{ "top": "5px", "right": "5px", "bottom": "5px", "left": "5px" }}
                placeholder='Phone'
              >
              </i-input>
            </i-hstack>
            <i-label
              visible={false}
              font={{ "color": "var(--colors-error-main)" }}
              maxWidth='30%'
              overflowWrap='break-word'
            >
            </i-label>
          </i-hstack>
          <i-hstack
            gap='8px'
            width='100%'
            height={32}
            border={{ "radius": "4px 4px 0 0", "width": "0px", "top": { "width": "1px", style: 'solid', color: Theme.divider } }}
            alignItems='center'
            padding={{ "right": "8px", "left": "8px" }}
          >
            <i-hstack
              width='100%'
              gap='4px'
              verticalAlignment='center'
              height='100%'
              alignItems='center'
            >
              <i-icon
                width='20px'
                height='20px'
                name='envelope'
                fill={Theme.input.fontColor}
              >
              </i-icon>
              <i-input
                width='100%'
                height='100%'
                background={{ "color": "transparent" }}
                border={{ "width": "0px" }}
                padding={{ "top": "5px", "right": "5px", "bottom": "5px", "left": "5px" }}
                placeholder='user@gmail.com'
              >
              </i-input>
            </i-hstack>
            <i-label
              visible={false}
              font={{ "color": "var(--colors-error-main)" }}
              maxWidth='30%'
              overflowWrap='break-word'
            >
            </i-label>
          </i-hstack>
        </i-vstack>
      </i-vstack>
    </i-panel>
  }
}