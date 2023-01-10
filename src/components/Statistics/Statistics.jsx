import styles from "./Statistics.module.css";
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { getRandomHexColor } from "utilits/getRandomHex";

export const Statistics = ({title, stats}) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
            {
                stats.map(stat => {
                    const Li = styled.li`
                        background-color: ${getRandomHexColor()};
                    `;

                    return <Li className={styles.item} key={stat.id}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
                    </Li>
                })
            }
        </ul>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        "id": PropTypes.string.isRequired,
        "label": PropTypes.string.isRequired,
        "percentage": PropTypes.number.isRequired,
    })),
}