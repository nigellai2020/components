import { Module, Styles, observable } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export default class IObservableExample extends Module {
    @observable()
    private _data: any = {
        username: '',
        displayName: '',
        about: ''
    }

    private handleButtonClick() {
        console.log('Save button clicked', this._data);
    }

    render() {
        return (
            <i-vstack
                position='relative'
                width='100%'
                gap={16}
                padding={{ "top": "12px", "right": "16px", "bottom": "12px", "left": "16px" }}
            >
                <i-vstack
                    position='relative'
                    width='100%'
                    gap={8}
                >
                    <i-hstack
                        position='relative'
                        width='100%'
                    >
                        <i-label
                            position='relative'
                            caption='Username'
                        >
                        </i-label>
                        <i-label
                            position='relative'
                            caption='*'
                        >
                        </i-label>
                    </i-hstack>
                    <i-input
                        value={this._data.username}
                        position='relative'
                        width='100%'
                        height='32px'
                        padding={{ "left": "8px", "right": "8px" }}
                        border={{ "width": "0px", "radius": "5px" }}
                    >
                    </i-input>
                </i-vstack>
                <i-vstack
                    position='relative'
                    width='100%'
                    gap={8}
                >
                    <i-hstack
                        position='relative'
                        width='100%'
                    >
                        <i-label
                            position='relative'
                            caption='Display Name'
                        >
                        </i-label>
                    </i-hstack>
                    <i-input
                        value={this._data.displayName}
                        position='relative'
                        width='100%'
                        height='32px'
                        padding={{ "left": "8px", "right": "8px" }}
                        border={{ "width": "0px", "radius": "5px" }}
                    >
                    </i-input>
                </i-vstack>
                <i-vstack
                    position='relative'
                    width='100%'
                    gap={8}
                >
                    <i-label
                        position='relative'
                        caption='About'
                    >
                    </i-label>
                    <i-input
                        value={this._data.about}
                        position='relative'
                        width='100%'
                        inputType='textarea'
                        rows={3}
                        border={{ "width": "0px", "radius": "5px" }}
                        padding={{ "left": "8px", "right": "8px" }}
                    >
                    </i-input>
                </i-vstack>
                <i-hstack horizontalAlignment="end" verticalAlignment="center">
                    <i-button
                        id="btnSave"
                        minHeight={36}
                        minWidth={120}
                        caption="Save"
                        border={{ radius: 18 }}
                        padding={{ top: '0.25rem', bottom: '0.25rem', left: '1rem', right: '1rem' }}
                        margin={{ top: '0.25rem', bottom: '0.5rem' }}
                        font={{ color: Theme.colors.primary.contrastText, bold: true }}
                        onClick={this.handleButtonClick}
                    />
                </i-hstack>
            </i-vstack>
        )
    }
}