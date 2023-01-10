import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './FriendListItem.module.css';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
    const Status = styled.span`
        background-color: ${isOnline ? "green" : "red"};
    `;

    return <li className={styles.item}>
        <Status className={styles.status} />
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>
};

FriendListItem.propTypes = {
    friend: PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
};