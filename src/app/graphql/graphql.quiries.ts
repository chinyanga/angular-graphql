import {gql} from "apollo-angular";

const GET_DIRECTORYLISTING =(dir:String)=> gql`
query{
    getAllListings(directory:"${dir}"){
      filename,
      isdirectory,
      filesize,
      fullpath,
      type,
      datecreated,
      fileCanReadOrWrite
    }
  }
`;
export {GET_DIRECTORYLISTING};