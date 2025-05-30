import { Module, Modal, VStack, Button } from '@ijstech/components';
export default class IModalSample extends Module {
    private dropdownModal: Modal;
    private vstack: VStack;
    private btnSignal: Button;
    private btnUnsignal: Button;
    private dropdownButon: Button;

    init() {
        super.init();
        this.renderWalletButton();
    }

    click() {
        this.dropdownModal.parent = this.dropdownButon;
        this.dropdownModal.visible = true;
    }

    async renderWalletButton() {
        this.vstack = await VStack.create({
            gap: '10px'
        });
        this.btnSignal = await Button.create({
            caption: "Signal",
            padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' },
            margin: { left: '0.5rem' },
            stack: { grow: '0' }
        });
        this.vstack.appendChild(this.btnSignal);
        this.btnUnsignal = await Button.create({
            caption: "Unsignal",
            padding: { top: '0.5rem', bottom: '0.5rem', left: '1rem', right: '1rem' },
            margin: { left: '0.5rem' }
        });
        this.vstack.appendChild(this.btnUnsignal);

        this.dropdownModal.item = this.vstack;
    }

    render() {
        return <i-panel
            height='100%'
            width='100%'
            padding={{ "left": 10, "right": 10, "top": 10, "bottom": 10 }}
        >
            <i-panel>
                <i-button
                    id='dropdownButon'
                    caption='Signal'
                    padding={{ "top": "0.5rem", "bottom": "0.5rem", "left": "1rem", "right": "1rem" }}
                    onClick={this.click}
                >
                </i-button>
                <i-modal
                    id='dropdownModal'
                    showBackdrop={false}
                    popupPlacement='bottomLeft'
                    closeOnBackdropClick={false}
                    title=''
                >
                </i-modal>
            </i-panel>
        </i-panel>
    }
}