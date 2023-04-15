import React from "react";
import { getFile } from "@/feat/getfile";
import { useState } from "react";
import { useEffect } from "react";
import ImageType from "./fileType/ImageType";
import PdfType from "./fileType/PdfType";
import VedioType from "./fileType/VedioType";

const ShowFiles = ({ fetchedFiles }) => {
    const [decodedFile, setDecodeFile] = useState([]);
    const getFileType = (filename) => {
        let ind = filename.lastIndexOf(".");
        let type = filename.slice(ind + 1);
        console.log(type);
        return type;
    };
    useEffect(() => {
        // console.log(fetchedFiles.length);
    }, []);
    return (
        <div className="grid_folder">
        <div className="grid_folder_contain ">
            {fetchedFiles.map((item) => {
                if (
                    getFileType(item.name) === "jpg" ||
                    getFileType(item.name) === "png" ||
                    getFileType(item.name) === "jpeg"
                ) {
                    return <ImageType item={item} />;
                }
                if (getFileType(item.name) === "pdf") {
                    return <PdfType item={item} />;
                }
                if (getFileType(item.name) === "mp4") {
                    return <VedioType item={item} />;
                }
            })}
        </div>
        </div>
    );
};

export default ShowFiles;