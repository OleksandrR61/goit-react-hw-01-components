import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friend => 
            <li key={friend.id}><FriendListItem friend={friend} /></li>
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};