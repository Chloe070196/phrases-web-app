import { useCallback, useEffect, useState } from "react"
import { getAllCategories } from "../../service/apiClient"
import './style.css'

function CategoryList({ setSelectedCategory }: { setSelectedCategory: React.Dispatch<React.SetStateAction<string>> }) {
    const [categories, setCategories] = useState<Array<{ category: string }> | null>(null)

    const retrieveCategoryList = useCallback(async () => {
        const categoryList = await getAllCategories()
        setCategories(categoryList)
    }, [])

    useEffect(() => { retrieveCategoryList() }, [retrieveCategoryList])
    return (
        <>
            <section>
                <h2>Filter by...</h2>
                <select onChange={(e) => setSelectedCategory(e.target.value)} className="section-colors category-list">
                    {categories && categories.map((item: { category: string }, index: number) => (
                        <option className="category-list-item" key={'category' + index}>
                            {item.category}
                        </option>
                    ))}
                    <option>all</option>
                </select>
            </section>
        </>
    )
}

export { CategoryList }