import { Input } from "@/components/ui/Input";
import { forwardRef, useRef, useState } from "react";
import Datepicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import styles from "./InputDatapicker.module.scss";

type InputDatapickerProps = {
    label: string;
    name: string;
    [key: string]: any;
};

const CustomDataInput = forwardRef<any, any>((props, ref) => {
    const { label, name, value, onClick, onChange } = props;

    return (
        <Input
            ref={ref}
            label={label}
            name={name}
            onClick={onClick}
            onChange={onChange}
            placeholder={" "}
            value={value}
        />
    );
});

export const InputDatapicker = ({
    name,
    label,
    ...rest
}: InputDatapickerProps) => {
    const inputRef = useRef();
    const [dateRange, setDateRange] = useState([null]);
    const [startDate] = dateRange;

    return (
        <label className={styles.component}>
            <Datepicker
                locale={ru}
                // dateFormat="dd.MM.yyyy"
                // selectsRange={true}
                // showTimeSelect
                startDate={startDate}
                // onChangeRaw={handleChange}
                // placeholderText="__.__.____ — __.__.____"
                // onChange={update => {
                //     setDateRange(update);
                // }}
                customInput={
                    <CustomDataInput name={name} label={label} ref={inputRef} />
                }
                {...rest}
            />
        </label>
    );
};
