/**
 *
 * @param {string} modalId
 */
function showModal(modalId) {
  document.querySelector(`#${modalId}`).classList.remove("hidden");
}

export default showModal;
