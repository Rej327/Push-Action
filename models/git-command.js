class GitCommand {
    constructor(working_directory){
        this.working_directory = working_directory;
    }
    //Command: git init 
    init(){
        this.staging = [];
        this.local_repository = [];
        return "Initialized as empty Git repository.";
    }

    //Command: git status
    status() {
    //     const newChanges = this.working_directory.new_changes;
    //     console.log('newChanges:', newChanges);
    //     const numChanges = Object.keys(newChanges).length;
    
    //     if (numChanges === 0) {
    //         return 'You have 0 change/s.\n';
    //     } else {
    //         let output = `You have ${numChanges} change/s.\n`;
    //         const sortedPaths = Object.keys(newChanges);
    //         for (let i = 0; i < sortedPaths.length; i++) {
    //             const path = sortedPaths[i];
    //             const { location, name } = newChanges[path];
    //             output += `${location}/${name}`;
    //             if (i < sortedPaths.length - 1) {
    //                 output += '\n';
    //             }
    //         }
    //         return output;
            
    //     }
    }
    
    

    //Command: git add <filename/file directory/wildcard> 
    add(path_file){
        let modified_files = this.working_directory.new_changes;
        
        if(modified_files[path_file]){
            this.staging.push(modified_files[path_file]);
            delete modified_files[path_file];
        }
    }

    //Command: git commit -m "<message>"
    commit(message){
        if(this.staging.length > 0){
            this.local_repository.push({ "message": message, "files": this.staging });
            this.staging = [];
            return "Done committing to local repository.";
        }
        return "Nothing to commit.";
    }

    //Command: git push
    push(){   
        if(this.local_repository.length > 0){
            return "Done pushing to remote repository.";
        } 
        else {
            return "Nothing to push. No committed file found.";
        }     
    }
}


module.exports = GitCommand;
