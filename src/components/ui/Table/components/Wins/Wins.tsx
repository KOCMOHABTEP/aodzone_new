import styles from "./Wins.module.scss";

interface WinsProps {
    value: string;
}

export const Wins = ({ value }: WinsProps) => {
    return <div>{value}</div>;
};
