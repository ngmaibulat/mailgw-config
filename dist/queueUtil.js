import { lsQueue, formatTable } from './queueMetadata.js';
import { lsQueueDetails, formatDetailsTable } from './queueDetails.js';
import { getFilter } from './queueFilter.js';
import { getArgs } from './queueArgs.js';
//index files to DB: Queue Watcher Tool
//with list of files: copy, move, run command with a template: somecmd -somearg $fname $hash $size $createdate
//show statistics
//filter
//output filtered filenames to a files
//perform action of filelist
//!flush items
//separate NPM package
//Queue Web UI
//Mail Trap
//plugins: deferred, bounced
const args = getArgs();
const dir = args.dir;
const filter = getFilter(args);
// console.log(filter)
if (args.meta) {
    const tbl = formatTable(lsQueue(dir));
    console.log('\n Metadata:');
    console.log(tbl);
}
const data = lsQueueDetails(dir, filter);
const tblDetails = formatDetailsTable(data);
console.log('\n Details:');
console.log(tblDetails);
