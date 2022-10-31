import * as React from 'react';

const initialState = {
    files:[
       {
        lastModified: 1664931716647,
        lastModifiedDate: "2022-10-05T01:01:56.647Z",
        name: "BoterRegFormEnglish.pdf",
        size: 261298,
        type: 'application/pdf',
        webkitRelativePath: ''
       }
    ]
};
type State = typeof initialState;


export default class Menu extends React.Component<{}, State> {
    public state: State = initialState;

    public updateFile = (e: React.FormEvent<HTMLInputElement>) => {
        const result = (e.target as HTMLInputElement).files;
        console.log(result?.[0])
        // this.setState(prevState => ({
        //     files: e.target.files[0],
        // }));
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
