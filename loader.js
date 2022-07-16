export default function imageLoader({ src }) {
    const url = src.replace("ipfs://", "https://ipfs.io/ipfs/")
    return url; 
  }
  
 