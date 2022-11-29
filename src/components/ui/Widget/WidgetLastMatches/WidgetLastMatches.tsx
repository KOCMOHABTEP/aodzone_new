import { MatchCard } from "@/components/views/MatchView/MatchCard";
import { Widget } from "../Widget";
import styles from "./WidgetLastMatches.module.scss";

interface WidgetLastMatchesProps {
    title: string;
}

export const WidgetLastMatches = ({ title }: WidgetLastMatchesProps) => {
    return (
        <Widget title={title}>
            <MatchCard data="22.07.23 19:18" team="39" />
            <MatchCard data="26.05.23 03:18" team="25" />
            <MatchCard data="18.07.23 08:18" team="38" />
        </Widget>
    );
};
