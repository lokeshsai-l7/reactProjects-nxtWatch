import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import {
  Card,
  ThumbnailImg,
  ChannelDetails,
  Details,
  Title,
  Para,
} from './styledComponent';

import { themeState } from '../../recoil_state';
import { useRecoilValue } from 'recoil';

const TrendingCard = (props) => {
  const { videoData } = props;
  const darkTheme = useRecoilValue(themeState);
  const { thumbnailUrl, channel, title, viewCount, publishedAt, id } =
    videoData;
  const date = formatDistanceToNow(new Date(publishedAt));
  return (
    <Link to={`/videos/${id}`}>
      <Card>
        <ThumbnailImg alt="Thumbnail" src={thumbnailUrl} />
        <ChannelDetails>
          <Title $darkTheme={darkTheme}>{title}</Title>
          <Details>
            <Para $darkTheme={darkTheme}>{channel.name}</Para>
            <Para $darkTheme={darkTheme}>{viewCount} Views</Para>
            <Para $darkTheme={darkTheme}>{date}</Para>
          </Details>
        </ChannelDetails>
      </Card>
    </Link>
  );
};

export default TrendingCard;
