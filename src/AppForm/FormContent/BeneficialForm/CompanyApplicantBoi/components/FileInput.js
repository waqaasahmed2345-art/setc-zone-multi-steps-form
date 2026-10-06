import { InsertDriveFileOutlined } from '@mui/icons-material'
import React from 'react'


const FileInput = ({  value,handleViewSingleFile, handleFileChange, fileLoader }) => {


  return (
    <>
       {value ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  width: "320px",
                                  marginTop: 5,
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  <InsertDriveFileOutlined
                                    sx={{ color: "red" }}
                                  />
                                  <span
                                    style={{
                                      marginLeft: "1px",
                                      maxWidth: "200px",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {/* {fileName?.length > 10 ? fileName.substring(0, 15) + '...' : fileName} */}
                                    doc.
                                  </span>
                                </div>
                                <div style={{  marginLeft: 'auto',display: "flex" }}>
                                  <button
                                    className="btnFile"
                                    style={{ marginRight: "10px", background: 'none' }}
                                    onClick={handleViewSingleFile}
                                    // onClick={handleViewSingleFile(userData?.driver_licence_front)}

                                  >
                                    View
                                  </button>
                                  {/* <button className='btnFile' style={{ marginLeft: '5px' }}>Remove</button> */}
                                </div>
                              </div>
                            ) : (
                              <div style={{ width: "320px", marginTop: 5 }}>
                                <input className="fileContainer"
                                 disabled={fileLoader} // Disable based on loader state
                                  type="file"
                                  onChange={handleFileChange}
                                  style={{ width: "260px" }}
                                />
                              </div>
                            )}
    </>
  )
}

export default FileInput
