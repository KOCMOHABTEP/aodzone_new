import styles from "./WinsPercentage.module.scss";

interface WinsPercentageProps {
    value: string;
}

export const WinsPercentage = ({ value }: WinsPercentageProps) => {
    return <div>{value}</div>;
};
