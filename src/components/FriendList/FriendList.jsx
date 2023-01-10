import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friend => 
            <FriendListItem key={friend.id} friend={friend} />
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