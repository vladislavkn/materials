import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { ROUTE_MATERIALS } from "@/shared/constants";
import { QUERY_KEY_MATERIALS } from "../constants";
import API from "../api.materials";
import Text from "@/shared/ui/Text/Text";
import ColorList from "@/shared/ui/ColorList/ColorList";
import Box from "ui-box/dist/src/box";
import ColorListItem from "@/shared/ui/ColorList/ColorListItem";

export type MaterialsListProps = {};

const MaterialsList: FC<MaterialsListProps> = () => {
  const { id: currentMaterialId } = useParams<{ id?: string }>();

  const { isLoading, error, data } = useQuery({
    queryKey: [QUERY_KEY_MATERIALS],
    queryFn: API.getMaterialsList,
  });

  if (error || data === undefined) {
    const errorMessage = error
      ? error.message
      : data === undefined
      ? "An error occured."
      : null;

    return <Text>{errorMessage}</Text>;
  }

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (data.length === 0) {
    return (
      <Box paddingX="2rem">
        <Text variant="muted">Nothing to show</Text>
      </Box>
    );
  }

  return (
    <ColorList>
      {data.map((material) => (
        <Link key={material.id} to={ROUTE_MATERIALS + material.id}>
          <ColorListItem
            color={material.color}
            title={material.title}
            active={String(material.id) === currentMaterialId}
          />
        </Link>
      ))}
    </ColorList>
  );
};

export default MaterialsList;
