import PropTypes from 'prop-types';

import { ProfileContainer,Description,Avatar,Name, Tag, Location,Stats,Item, Label,Quantity } from './Profile.styled';


const  Profile=({ avatar, username, tag, location, stats })=>{
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar"  />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </ProfileContainer>
  )
}

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string.isRequired ,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}