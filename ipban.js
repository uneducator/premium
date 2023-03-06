const bannedIPs = ['82.17.121.194'];

// get user's IP address
const getUserIP = async () => {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
};

// check if user's IP is in bannedIPs array
const checkBannedIP = async () => {
  const userIP = await getUserIP();
  if (bannedIPs.includes(userIP)) {
    localStorage.setItem('banned', 'true');
  }
};

checkBannedIP();