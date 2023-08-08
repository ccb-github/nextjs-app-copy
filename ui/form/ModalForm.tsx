import BlurImage from "#/components/blur-image"

export default function ModalForm(props:{}) {

	return (
    <dialog id="favDialog">
      <form method="dialog">
        <p>
          <label>
            Favorite animal:
            <select>
              <option value="default">Choose…</option>
              <option>Brine shrimp</option>
              <option>Red panda</option>
              <option>Spider monkey</option>
            </select>
          </label>
        </p>
			
        <div className="flex flex-row">
          <button value="cancel">Cancel</button>
          <button id="confirmBtn" value="default">
            Confirm
          </button>
        </div>
      </form>
    </dialog>
  )
}