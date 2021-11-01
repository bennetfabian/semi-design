import React, { useEffect } from 'react';
import Input from '../index';
import InputGroup from '../inputGroup';
import { useIntl } from 'react-intl';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Demo = () => {
    const ref = React.useRef(null);
    const intl = useIntl();

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [ref.current]);

    return (
        <div>
            <Input
                placeholder="aaaa"
                prefix={(<span>Prefix</span>)}
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                onChange={(v, e) => console.log(e)}
                showClear
            />
            <hr />
            <InputGroup>
                <Input placeholder="Input" style={{ width: 100 }} ref={ref} />
                <Input placeholder="Group" style={{ width: 200 }} />
            </InputGroup>
            <Input
                placeholder={intl.formatMessage({ id: 'semi' })}
                prefix={(<span>Prefix</span>)}
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                onChange={(v, e) => console.log(e)}
                showClear
            />
        </div>
    );
};

export default Demo;
