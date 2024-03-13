import { useCallback, useEffect, useState } from "react"
import { getAllCategories } from "../../service/apiClient"
import './style.css'

function CategoryList() {
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
                <ul className="section-colors category-list">
                    {categories && categories.map((item: { category: string }) => (
                        <li className="category-list-item">
                            <input type="checkbox" value={item.category} />
                            <strong>{item.category}</strong>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export { CategoryList }