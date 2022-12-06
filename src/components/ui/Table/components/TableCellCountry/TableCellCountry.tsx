import FlagRU from "~/icons/countries/RU.svg";
import FlagBY from "~/icons/countries/BY.svg";
import FlagKZ from "~/icons/countries/KZ.svg";
import styles from "./TableCellCountry.module.scss";

const COUNTRIES_LIST = {
    RU: FlagRU,
    BY: FlagBY,
    KZ: FlagKZ,
};

interface TableCellCountryProps {
    country: keyof typeof COUNTRIES_LIST;
}

export const TableCellCountry = ({ country }: TableCellCountryProps) => {
    const CountryIcon = () => {
        const iconSize = { width: 24, height: 24 };

        return COUNTRIES_LIST[country](iconSize);
    };

    return (
        <div className={styles.item}>
            <CountryIcon />
        </div>
    );
};
