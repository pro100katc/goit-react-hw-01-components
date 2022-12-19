import propTypes from 'prop-types'
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

const FriendList = ({ items }) => (
  
    <List>
      {items.map(item => (
        <FriendListItem key={item.id} isOnline={item.isOnline} avatar={item.avatar} name={item.name} />
      ))}
    </List>

);


FriendList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
}

export default FriendList;