interface props {
    src: string
    alt: string
    avatarID: number
    chooseNewAvatar: (id:number)=> void
}

function AvatarSettingsBtn({
  src, alt, avatarID, chooseNewAvatar,
}:props):JSX.Element {
  return (
    <button type="button" onClick={() => chooseNewAvatar(avatarID)}>
      <img src={src} alt={alt} />
    </button>
  );
}

export default AvatarSettingsBtn;
