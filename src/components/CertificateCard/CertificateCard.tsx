import { Box, Typography } from "@mui/material";
import React from "react";
import Tag from "../Tag/Tag";
import OtherBrands from "../OtherBrands/OtherBrands";
import ActionButton from "../ActionButton/ActionButton";

const CertificateCard = ({ certificate }: any) => {
  return (
    <>
      {" "}
      <Box
        sx={{
          //   backgroundColor: "#F9F5FF",
          //   backgroundColor: "#FFF8F0",
          //   backgroundColor: "#FFF7F8",
          borderBottom: "1px solid #F9F5FF",
          mb: 1.5,
          borderRadius: "4px",
          padding: "4px",
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            padding: "15px",
            width: "100%",
          }}
        >
          <Box>
            <Typography fontSize={26} fontWeight={200}>
              {certificate?.title}
            </Typography>
            {/* <Typography
                    className={"sub-text"}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {certificate?.description}
                  </Typography> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            {certificate?.skills?.map((skill: any, index: any) => {
              return <Tag key={index} text={skill} variant={"text"} />;
              return <></>;
            })}
          </Box>
          <Box
            // className="flex-all-center"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mt: 1,
              }}
            >
              {certificate?.brands.map((brand: any, index: any) => {
                return <OtherBrands key={index} name={brand} />;
              })}
            </Box>
            <Box>
              <ActionButton
                type="download"
                action={certificate?.downloadCertificate}
                tooltip="Download Certificate"
              />
              <ActionButton
                type="certificate"
                action={certificate?.certificateLink}
                tooltip="Certificate Link"
              />
              <ActionButton
                type="course"
                action={certificate?.courseLink}
                tooltip="Course Link"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CertificateCard;
