import { lsQueue, formatTable } from './queueMetadata.js';
import { lsQueueDetails, formatDetailsTable } from './queueDetails.js';
const dir = './queue/';
//take path from args!
//consistent DateTime output
//table headers
//show only one of tables
//filter
//output filtered filenames to a files
//perform action of filelist
//index files to DB
//show statistics
//flush items
//separate NPM package
const tbl = formatTable(lsQueue(dir));
const data = lsQueueDetails(dir);
const tblDetails = formatDetailsTable(data);
console.log(tbl);
console.log(tblDetails);
