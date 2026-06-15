import '/src/oneusecomp/components.css';
import { Link } from 'react-router-dom';

function MuslimcraftLiteDownloadsList() {
  return (
      <>
        <h3> 1.20 and above</h3>
        <ul>
        <li>
          <a href="https://github.com/friedegg796/Muslimcraft-Lite/archive/refs/tags/1.0.2-1.20+.zip" target="_blank" rel="noopener noreferrer">
            Version 1.0.2
          </a>
        </li>
        <li>
          <a href="https://github.com/friedegg796/Muslimcraft-Lite/archive/refs/tags/1.0.1-1.20+.zip" target="_blank" rel="noopener noreferrer">
            Version 1.0.1
          </a>
        </li>
        </ul>

      <h3> 1.19 and below </h3>
      <ul>
        <li>
          <a href="https://github.com/friedegg796/Muslimcraft-Lite/archive/refs/tags/1.0.1-1.19-below.zip" target="_blank" rel="noopener noreferrer">
            Version 1.0.1
          </a>
        </li>
      </ul>
      </>
  );
}

export default MuslimcraftLiteDownloadsList;
