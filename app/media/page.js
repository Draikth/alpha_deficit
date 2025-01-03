import MusicPlayer from './MusicPlayer';
import VidPlayer from './VidPlayer';

export const metadata = {
  title: 'Media',
  description: 'Alpha Defizit Band Page',
};

export default function MediaPage() {
  return (
    <div>
      <h2>Check out some of our videos!</h2>
      <div>
        <VidPlayer />
      </div>
      <br />
      <h2>Listen to our songs!</h2>
      <div>
        <MusicPlayer />
      </div>
      <br />
      <h2>Misc.</h2>
      <div>
        This space for anything that is come up with that would be "media" but
        not fit in either videos or songs? can also always be deleted if no misc
        category exists
      </div>
    </div>
  );
}
