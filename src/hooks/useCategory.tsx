import { useCallback, useMemo, useState } from "react";

const useCategory = (group: any) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

    const sortedGroupByCount = useMemo(() => {
        return group.sort((a: any, b: any) => {
            return b.totalCount - a.totalCount;
        })
    }, [group])

    const getCategoryList = (key: string) => (array: any) => array.map((item: any) => item[key]);

    const onChangeCategory = useCallback((category: string) => {
        setSelectedCategory(category);
    }, [selectedCategory])

    const resultCategory = getCategoryList('fieldValue')(sortedGroupByCount)
    resultCategory.unshift('ALL');


    return {
        selectedCategory, 
        categoryList: resultCategory,
        onChangeCategory
    }
}

export default useCategory;