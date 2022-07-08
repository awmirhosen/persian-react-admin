import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />;

const ColorPicker = () => (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="برنامه" title="رنگدانه" />
        <div className="text-center">
            <div id="preview" />
            <div className="flex justify-center items-center gap-20 flex-wrap">
                <div>
                    <CustomColorPicker id="inline-palette" mode="Palette" />
                </div>
                <div>
                    <CustomColorPicker id="inline-picker" mode="Picker" />
                </div>
            </div>
        </div>
    </div>
);

export default ColorPicker;