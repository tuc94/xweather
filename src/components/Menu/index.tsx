import * as React from 'react';

const initialState = {
    file:
       {
        lastModified: 1664931716647,
        name: "BoterRegFormEnglish.pdf",
        size: 261298,
        type: 'application/pdf',
        webkitRelativePath: ''
       }
    
};
type State = typeof initialState;
type File = typeof initialState.file;


export default class Menu extends React.Component<{}, State> {
    public state: State = initialState;

    public updateFile = (e: React.FormEvent<HTMLInputElement>) => {
        const target= e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
        this.setState(prevState => ({
            file: {...prevState.file, ...file}
        }));
    };

    public render() {
        return (
            <div>
           <form action="/action_page.php">
  <input type="file" id="myFile" name="filename"  onChange={(e: React.FormEvent<HTMLInputElement>) => this.updateFile(e)}/>
  <input type="submit" />
</form>
            </div>
        );
    }
}
